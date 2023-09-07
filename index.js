const {Telegraf}=require ('telegraf');
// import { Telegraf } from 'telegraf';?
require ('dotenv').config();
const bot=new Telegraf(process.env.bot_token);


const course=` https://top-courses.onrender.com/ `;
const portfolio=`https://264gaurav.github.io/portfolio2/ `;
const projects=`https://264gaurav.github.io/portfolio2/#Projectsid `;
const app=`https://github.com/264Gaurav/foodordering`;


bot.start((ctx) => ctx.reply('Welcome to Bot_45.  TYPE "help" to get the commands '));


try{
    bot.command('course' , (ctx)=>ctx.reply(course));
    bot.command('portfolio' , (ctx)=>ctx.reply(portfolio));
    bot.command('projects' , (ctx)=>ctx.reply(projects));
    bot.command('app' , (ctx)=>ctx.reply(app));

    bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.hears('time', (ctx)=>ctx.reply(new Date().toLocaleString())) 

    bot.on('emoji' , (ctx)=>ctx.reply('❤️'));
    bot.on('sticker' , (ctx)=>ctx.reply(' 👍 '));

    bot.on("text", (ctx) => {
        // console.log(ctx.update.message);
        if(ctx.update.message.text == 'i love you'){
            ctx.reply('I Love you Too');
        }
        else if(ctx.update.message.text == 'hello'){
            ctx.reply('Hii!');
        }
        else if(ctx.update.message.text == 'help'){
            ctx.reply(`commands: /app , /portfolio , /projects ,
              time , hi , hello ,i love you `);
        }
        else {
            ctx.reply('I cannot understand this command.' );
        }
    });    

    bot.launch();

}catch{
    console.log('unexpected command');
}

// bot.launch();