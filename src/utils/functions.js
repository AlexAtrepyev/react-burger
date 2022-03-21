function clusterData(data) {
  return {
    bun: data.filter(item => item.type === 'bun'),
    main: data.filter(item => item.type === 'main'),
    sauce: data.filter(item => item.type === 'sauce')
  }
}

export default clusterData;
