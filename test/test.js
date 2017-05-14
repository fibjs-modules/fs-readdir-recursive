const test = require('test');
const fs = require('fs');
const path = require('path');
const sep = path.sep;

test.setup();

const read = require('../');

describe('fs.readdirRecursive()', () => {
  it('should work in the folder', () => {
    const files = read(__dirname);
    assert(files.length === 1);
    assert(files[0] === 'test.js');
  });

  it('should work at the root with a filter', () => {
    const files = read(path.join(__dirname, '..'), name => {
      return name[0] !== '.' && name !== 'node_modules' && name !== 'coverage';
    });

    assert.equal(files.length, 7);
    assert.deepEqual(files.sort(), [
      `test${sep}test.js`,
      'index.js',
      'LICENSE',
      'package.json',
      'README.md',
      'appveyor.yml',
      'History.md',
    ].sort());
  })

  xit('should work with the symlinked file', () => {
    try {
      const linkname = __filename + '-link';
      fs.symlinkSync(__filename, linkname, 'file');

      const files = read(__dirname).sort();

      assert(files.length === 2);
      assert.deepEqual(files, ['test.js', 'test.js-link']);
    } catch (err) {
      throw err;
    } finally {
      fs.unlinkSync(linkname);
    };
  });

  xit('should work in the symlinked directory', () => {
    try {
      const linkname = __dirname + '-link';
      fs.symlinkSync(__dirname, linkname, 'dir');

      const files = read(linkname);

      assert(files.length === 1);
      assert(files[0] === 'test.js');
    } catch (err) {
      throw err
    } finally {
      fs.unlinkSync(linkname);
    }
  });

  xit('should work in the symlinked directory with a filter', () => {
    try {
      const linkname = path.join(__dirname, '..') + '-link';
      fs.symlinkSync(path.join(__dirname, '..'), linkname, 'dir');

      const files = read(linkname, name => {
        return name[0] !== '.' && name !== 'node_modules' && name !== 'coverage';
      });

      assert(files.length === 5);
      assert.deepEqual(files.sort(), [
        `test${sep}test.js`,
        'index.js',
        'LICENSE',
        'package.json',
        'appveyor.yml',
        'README.md'
      ].sort());
    } catch (err) {
      throw err
    } finally {
      fs.unlinkSync(linkname);
    }
  });

  xit('should ignore non-exist symlinked inside', () => {
    try {
      const linkname = __filename + '-link';
      const emptyname = __filename + '-empty';
      fs.writeFileSync(emptyname, 'empty');
      fs.symlinkSync(emptyname, linkname, 'dir');
      fs.unlinkSync(emptyname);

      const files = read(__dirname);

      files.should.eql(['test.js']);

      assert.deepEqual(files, ['test.js']);
    } catch (err) {
      throw err;
    } finally {
      fs.unlinkSync(linkname);
    }
  });

  it('should return empty array', () => {
    assert.deepEqual(read('non-exist-dir'), []);
  });
});

process.exit(test.run(console.DEBUG));
