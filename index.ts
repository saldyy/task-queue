const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms * 1000));

const runTasksWithConcurrencyLimit = async <T>(
  data: T[],
  asyncFunc: (data: T) => Promise<void>,
  concurrencyLimit: number
): Promise<void> => {
  let index = 0;

  const taskWrapper = async () => {
    if (index >= data.length) {
      return
    }
    await asyncFunc(data[index++]);
    await taskWrapper()
  }

  const p: Promise<any>[] = []
  for (let i = 0; i < concurrencyLimit; i++) {
    p.push(taskWrapper())
  }
  await Promise.all(p)

}


(async () => {
  console.time('runTasksWithConcurrencyLimit')
  await runTasksWithConcurrencyLimit<number>(
    [1, 7, 2, 3, 5, 4, 6, 8],
    async (data) => {
      console.log("start process", data)
      await sleep(data);
      console.log('Finish', data);
    },
    3
  )
  console.timeEnd('runTasksWithConcurrencyLimit')
})()
