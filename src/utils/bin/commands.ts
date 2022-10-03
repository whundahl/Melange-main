// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import roiImg from '../../../public/roi.png';
import { stringify } from 'querystring';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
  
  Welcome to ${config.name}. 
  
  +-+-+-+ +-+-+-+-+-+
  |O|u|r| |S|t|o|r|y|
  +-+-+-+ +-+-+-+-+-+
  
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit am`;
};

/* export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
}; */

/* // Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
}; */

// Contact
export const contact = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const portfolio = async (args: string[]): Promise<string> => {
  return `
<a  target="_blank" href="https://www.getroi.app"> <img src="/roi.png" width="250px" height="50px" alt="ROI"/></a>
Buy AAPL on E*Trade. Sell TSLA on Robinhood. Swap Ethereum for Solana. Stake USDC on Ribbon. 

Set custom prices for your NFTs. All in one app.

<hr>
<a target="_blank" href="https://www.stepn.com"> <img src="/stepn-logo.svg" width="250px" height="50px" alt="STEPN"/></a>

STEPN is built around an essential daily activity for most people – moving around.

Users equip themselves with NFTs in the form of Sneakers. By walking, jogging, or running outdoors, users will earn game currency, which can either be used in-game, or cashed out for profit.

<hr>
<a target="_blank" href="https://www.shatterpoint.game"><img src="/shatterpoint_logo.png" width="250px" height="50px" alt="SHATTERPOINT"/></a>
The first skill-based, F2P, action RPG game for mobile on Polygon. Developed & published by <u><a target="_blank" href="https://twitter.com/EstotyGames">Estoy Games</a></u> & <u><a target="_blank" href="https://twitter.com/GetBlockGames.">Block Games</a></u>.

Join our <u><a target="_blank" href="http://Discord.gg/shatterpoint">Discord</a></u>

<hr>
<a target="_blank" href="https://www.tonic.foundation"><img src="/tonic-logo.png" width="250px" height="50px" alt="TONIC"/></a>

Tonic brings the speed and convenience of centralized exchanges to NEAR while being fully decentralized.

One second block times and fast transaction finality, all on NEAR L1.
No middlemen or rent seekers, trade peer-to-peer directly with low fees.

<hr>
<a target="_blank" href="https://www.utiliti.ai"><img src="/utiliti.png" width="250px" height="50px" alt="UTILITI"/></a>

Utiliti connects any tech stack to blockchain networks with enterprise-grade APIs and SDKs, ensuring the best user experience.

One place for all your blockchain app/game development needs. Try for free, pay as you go, simple as that.

<hr>
<a target="_blank" href="https://welcometonor.com"><img src="/nor_battleworn_center.svg" width="250px" height="50px" alt="NOR"/></a>

NOR is a universe that is neither metaverse NOR game. It does not exist as any single “thing.” In simple terms, NOR is a platform for play.

This takes many shapes for many people, with the two most important being the city of Khora and the stadiums.

<hr>
<a target="_blank" href="https://playcivitas.io"><img src="/civitas.svg" width="250px" height="50px" alt="CIVITAS"/></a>

Civitas is a 4x MMO cross-platform (PC, Mobile, Web) civilization simulator that allows anyone to build an entire virtual civilization from the ground up.

<hr>
<a target="_blank" href="https://huma.finance"><img src="/huma-logo.svg" width="250px" height="50px" alt="HUMA"/></a>

A credit line for every wallet.

Income deserves credit. Ready to use, anytime.
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
but, feel free to check out some of our other hidden features...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

/* export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
}; */

/* export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
}; */

// Banner
const bannerText = String.raw`
          _____                            _____          
         /\    \                          /\    \         
        /::\____\                        /::\____\        
       /::::|   |                       /:::/    /        
      /:::::|   |                      /:::/    /         
     /::::::|   |                     /:::/    /          
    /:::/|::|   |                    /:::/____/           
   /:::/ |::|   |                    |::|    |            
  /:::/  |::|___|______              |::|    |     _____  
 /:::/   |::::::::\    \             |::|    |    /\    \ 
/:::/    |:::::::::\____\            |::|    |   /::\____\
\::/    / ~~~~~/:::/    /            |::|    |  /:::/    /
 \/____/      /:::/    /             |::|    | /:::/    / 
             /:::/    /              |::|____|/:::/    /  
            /:::/    /               |:::::::::::/    /   
           /:::/    /                \::::::::::/____/  <b><i>VENTURES</i></b>  
          /:::/    /                              
         /:::/    /                                       
        /:::/    /                                        
        \::/    /                                         
         \/____/  <b><i>MELANGE</i></b>                                             
                                                                     
Type 'help' to see the list of available commands.

  <i>'about' To Learn more.
  'portfolio' Lists our investments.
  'contact' For any questions.</i>
`;

const smallBannerText = String.raw`
          ___     
         /\__\    
        /::|  |   
       /:|:|  |   
      /:/|:|__|__ 
     /:/ |::::\__\
     \/__/~~/:/  /
           /:/  / 
          /:/  /  
         /:/  /   
         \/__/  <b><i>MELANGE</i></b>  
          ___     
         /\__\    
        /:/  /    
       /:/  /     
      /:/__/  ___ 
      |:|  | /\__\
      |:|  |/:/  /
      |:|__/:/  / 
       \::::/__/  <b><i>VENTURES</i></b>        

Type 'help' to see the list of available commands.

  <i>'about' To Learn more.
  'portfolio' Lists our investments.
  'contact' For any questions.</i>
`;

export const banner = (args?: string[]): string => {
  if (window.innerWidth <= 400) {
    return smallBannerText;
  } else {
    return bannerText;
  }
};
