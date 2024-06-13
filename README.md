
### This is an implementation of a task queue with concurency


This task queue function takes 3 arguments: the data to process, async task callbacks and number of concurrent tasks to run.

When ever a task is completed, the next task in the queue is started.

For Example: We have 6 tasks to run concurrently, and we want to run 3 tasks at a time. The tasks are labeled from 1 to 6. It should work as follows:

1. Start execution #1
2. Start execution #2
3. Start execution #3
4. Execution #1 completes, start execution #4
5. Execution #3 completes, start execution #5
6. Execution #2 completes, start execution #6
7. Execution #4
8. Execution #5
9. Execution #6

