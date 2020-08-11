import axios from "axios";

export default axios.create({
baseURL: "https://api.unsplash.com",
headers: {
Authorization: "Client-ID qxV2O6OBDym2Mw_fcoUxOkpF1IICfHZEhdjGNQGdB5Q"
}
});