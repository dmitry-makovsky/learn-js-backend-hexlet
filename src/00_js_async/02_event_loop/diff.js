import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  const [more, less, order] = lines1.length > lines2.length
    ? [lines1, lines2, true] : [lines2, lines1, false];
  return more.reduce((acc, line, index) => {
    if (less.length <= index) {
      return [...acc, order ? [line, null] : [null, line]];
    }
    if (less[index] !== line) {
      return [...acc, order ? [line, less[index]] : [less[index], line]];
    }
    return acc;
  }, []);
};

// BEGIN (write your solution here)
export default (file1, file2, callback) => {
  fs.readFile(file1, (err1, data1) => {
    if (err1) {
      callback(err1);
      return;
    }
    fs.readFile(file2, (err2, data2) => {
      if (err2) {
        callback(err2);
        return;
      }
      const str1 = data1.toString();
      const str2 = data2.toString();
      callback(null, compare(str1, str2));
    });
  });
};
// END
