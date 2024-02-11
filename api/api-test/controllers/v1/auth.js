import jwt from 'jsonwebtoken';
 
const users = [{
    username: "admin",
    password: "adminPassword"
}];
 
const accessTokenSecret = "thisismyveryownsecret";
 
export const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username === username && u.password === password });
    if (user) {
        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);
        res.json({ accessToken });
    } else {
        res.send('Username or password is incorrect');
    }
}
 
export const authicateJWT = (req, res, next) => {
    const authheader = req.headers.authorization;
    if (authheader) {
        const token = authheader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}