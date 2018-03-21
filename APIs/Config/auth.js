module.exports = {
    'facebookAuth' : {
        'clientID'      : '140083593465747', // your App ID
        'clientSecret'  : '016d2ee6b3894edda90afaebbbba9fde', // your App Secret
        'callbackURL'   : 'https://kinssolutions-carrent.herokuapp.com/auth/facebook/callback', //call back url heroku
        // 'callbackURL'   : 'https://localhost:3000/auth/facebook/callback', //call back url localhost    
        'profileFields' : ['id', 'displayName','email', 'picture.type(large)'] //all data fields to get from FB profile
    }
}