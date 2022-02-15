# New Business site
This project contains the pages, content, and assets hosted by Netlify.  Larger files should not be used on the shared branches repo.  You can use Docsend (PDF, Spreadsheets, Keynote, PPT, Docs), Amazon S3 or other hosting for files.

## Build Docs
(https://confluence.uhub.biz/spaces/viewspace.action?key=VMLKCNB)

## Update html pages
_src/html

## Update Partials 
_src/html/_partials

- header
- footer

## PDF location
These should be stored in Docsend or Amazon S3. Docsend provides a better UX and using either removes the repo from getting closer to max capacity.

_src/copy/assets/pdf

## Font location
_src/copy/assets/fonts

## Add script files
_src/copy/assets/scripts

## Various file types to be copied to the assets folder on build
_src/copy/assets/

## Custom SASS / CSS
_src/styles/views/_views

## Update data 
_src/html/_data

- global: menu

## Update/Add images
_src/images

## Branching Overview
To create a new website, branch off of master or another website branch. Your new branch should be concise and clear to read/understand and the same as the subdomain of the url if available. The branches may be organized into folders: vmlyr/, industryworks/, wpp/ depending on the repo. For example, if you have a project for PlayStation and the site is for VMLY&R and the url is playstation.vmlyrconnect.com, the branch name would be vmlyr/playstation.  If it is a wpp request then the branch name would be wpp/playstation.

Industryworks is only used for creative requests that come from Ashley Bottorff and her team.

## Run Local Server
To run the local server, install the dependencies and start the server with npm install && npm start.  npm start will delete all files in /public and replace them with the latest. You also can run npm run production to update /public.

Use the style guide for building the site in /docs.  It is available online only for the most current build at (https://styles.vmlyrconnect.com/docs/figure.html) PW: Summer33

Case study video images are hosted on Contentful.  See the Contentful page on the build docs for information about using it.

## Accessing AWS
See instructions for accessing (https://confluence.uhub.biz/pages/viewpage.action?spaceKey=VYRGLOEAC&title=Accessing+AWS) AWS S3 bucket. To get access to the Amazon bucket's used for New Business and Internal site builds, see the Amazon section (https://confluence.uhub.biz/pages/viewpage.action?pageId=204554588) of the tools page.

## Step by Step Instructions
### New Site Build

1. Clone the repo for the site you want to copy or clone the master branch.
1. Install the npm packages and run the local server as mentioned above with npm install && npm start.
1. Use the src/html/docs style guide for available styles and components.
1. Update the src/html/index.html file for content updates. You can duplicate this page and change the file name to create new pages.
1. Case Study images are located in Contentful > Media.  Search for the image by client name (ex. Wendys, Rolex), click on it then Info to get the id.  For Case Studies, the id is used with the Spotlight component. The use of height and width only works with Contentful.
1. Update the src/images/logo-combined.png image with the current client and vmlyr or wpp logo.
1. Images and files be hosted on an Amazon S3 bucket. If added locally, it must be as small as possible while retaining quality so it doesn't fill the repo max size of 2GB shared with other sites.
    1. At Amazon, make sure you are in the correct role. Switch role if not (menu top right corner).
    1. Each directory relates to the repo Branch names.
1. Push the changes to the repo.
1. Follow the steps in Publishing with Netlify below to complete the site build.

### Update Existing Site
1. Checkout the repo for the site you want to edit.
1. Follow steps 2 - 8 above (Wont have to do step 6).
1. Push the changes to the repo.
1. Log in to Netlify to confirm the deploy completed with no errors and verify the change is on the site live.

### Publishing with Netlify
Once the site is created, push up your changes.

1. Login to Netlify
1. Click on New site from Git
1. Click on BitBucket button to login
1. Choose the repo you are working with.
1. Change owner to WPP and select the branch you want to deploy. You can type in this field to find yours.
1. Enter build command: npm run production; and publish directory: public.
1. Click “Deploy site” to complete the initial setup.

Your Netlify website will now be deployed and published. Once a website is deployed, you will be given a temporary URL. This URL can and should be changed.

1. Search for and click on the project you wish to edit
1. Go to Domain Settings > Domain Management
1. Click on “Add domain alias”
1. Add a custom domain, for example: playstation.vmlyrconnect.com.
    1. For VMLY&R projects, use vmlyrconnect.com
    1. For WPP projects, use wpp-connect.com
    1. For creative sites that Ashley submits for Industry work, use industrywork.net. This domain should only be used for their sites and no one else.
    1. The current available domains to utilize are located under: WPP > Domains. Most in the list are in use on sites and not re-usable across other sites.
    1. There are requests where people want their own custom domain name. You can let them know the vmlyrconnet.com or wpp-connect.com domain names are available as a subdomain name. 
    1. Occasionally, there are requests that will utilize a custom domain name.  These can be purchased from a TechOps ticket that will require a project code to bill too.  After this is completed, a request to uhub support can point the domain name to the Netlify servers or setup with an A record. 
1. Verify domain and accept message that comes up
1. Finally, enable HTTPS through the free SSL/TLS certificate

All new business websites should be password protected. To set a password:

1. Search for and click on project you wish to edit
1. Go to Site Settings > Access Control
1. Click on "Set password"

## Netlify Troubleshooting
If you update the site but don't see the update live, it may have failed in Netlify.  You can try to retrigger the deploy and see if it publishes

Netlify > Deploys > Trigger deploy > Clear cache and deploy site

You also can look for the reason why the deploy failed by clicking on the deploy showing failed.

## Current Issues at Netlify
Netlify Status (https://www.netlifystatus.com/)

Netlify Support: support@netlify.com