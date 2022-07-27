function createRect(width, height) {
    function getWidth() {
        return width;
    }

    function getHeight() {
        return height;
    }

    function getArea() {
        return width * height;
    }

    return {
        getWidth,
        getHeight,
        getArea
    };
}

const myRect = createRect(5, 3);
console.log(myRect);
console.log(myRect.getWidth());