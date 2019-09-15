export function createBarDatas() {
  const datas: number[] = [];

  for (let index = 0; index < 20; index++) {
    const d = Math.floor(100 * Math.random());
    datas.push(d);
  }

  return datas;
}
