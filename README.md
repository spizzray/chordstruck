Whenever recloned, ensure files match those of the react branch and not the main branch. Also ensure that you delete the file browserslist if it is there. 

Then run the following code:

npm config set legacy-peer-deps true 
npm install @material-ui/core
npm install
npm install material-ui-audio-player
npm install react-player

npm start
