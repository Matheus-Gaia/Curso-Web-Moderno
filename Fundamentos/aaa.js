setInterval(() => {
    let hoje = new Date()
    console.log(`${hoje.getHours()} : ${hoje.getMinutes()} : ${hoje.getSeconds()} ${hoje.getFullYear()} `)
}, 1000)