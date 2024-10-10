export const testSrcImgArray = (count = 10) => {
    const res = []
    for (let i = 0; i <= count; i++) {
        res.push(`https://picsum.photos/200/300?random=${i}`)
    }
    return res;
}
