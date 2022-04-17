function stringy(size) {
    let rep10 = Math.floor(size/2);
      if (size%2 == 1) {
          return '10'.repeat(rep10)+1;
      }
      else {
          return '10'.repeat(rep10)
      }
    } 