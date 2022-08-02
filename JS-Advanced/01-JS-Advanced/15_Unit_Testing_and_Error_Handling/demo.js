function solve() {
    try {
        throw Error('my error');
    } catch (error) {
        console.error(error);
    } finally {
        
    }


}

solve();