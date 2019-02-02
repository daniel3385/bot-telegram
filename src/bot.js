const TeleBot = require('telebot')

function boot(token) {
    const bot = new TeleBot(token)
    bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'))
    bot.start()
}

module.exports.boot = boot
