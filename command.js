const { REST, Routes }= require( 'discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE1NjQ4MDUzODMxNjY1NjcxMQ.GapLzF.9Xy5MQG_TdasIA9WnBwWJExrKvEVOXoI78_V1U");
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1156480538316656711"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

