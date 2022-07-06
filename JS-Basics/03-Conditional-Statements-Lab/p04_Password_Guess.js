function passwordGess(input) {
    let password = input[0];
    if ('s3cr3t!P@ssw0rd' == password) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

passwordGess(["qwerty"]);
passwordGess(["s3cr3t!P@ssw0rd"]);
passwordGess(["s3cr3t!p@ss"]);