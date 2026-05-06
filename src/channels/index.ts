// Channel self-registration barrel.
// Each import triggers the channel module's registerChannelAdapter() call.
//
// Main ships with one default channel — `cli`, the always-on local-terminal
// channel. Other channel skills (/add-slack, /add-discord, /add-whatsapp,
// ...) copy their module from the `channels` branch and append a
// self-registration import below.

// CLI — always-on local-terminal channel
import './cli.js';

// Discord — add via /add-discord skill
// import './discord.js';

// Gmail
// import './gmail.js';

// Slack
// import './slack.js';

// Telegram
// import './telegram.js';

// WhatsApp
// import './whatsapp.js';
