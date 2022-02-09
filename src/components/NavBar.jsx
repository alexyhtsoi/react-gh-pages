const NavBar = () => {
    return <div> 
        <h2>This is the Navigation Menu</h2>
        <p>Steps to use GH Pages
            1. Install gh-pages: npm install gh-pages --save <br/>
            2. Add homepage to package.json:  "homepage": "https://milind452.github.io/my-reads/" <br/>
            3. Add scripts: "predeploy": "npm run build",  "deploy": "gh-pages -d build" <br/>
            4. Deploy: npm run deploy
        </p>
    </div>;
}

export default NavBar;