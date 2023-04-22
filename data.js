var defaultThreads = [
    {
        id: 1,
        title: "random",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "hi"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "hello"
            }
        ]
    },
    {
        id: 2,
        title: "Hacking",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hello world"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hello person"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
