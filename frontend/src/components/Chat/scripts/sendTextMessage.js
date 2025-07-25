import { getAsync } from "../../../services/rest/getAsync.js";
import geminiUrlEnums from "../../../enums/gemini/geminiUrlEnums.js";

export async function sendTextMessage(message) {
    const query =
        {
            textQuery : message
        }
    return await getAsync(geminiUrlEnums.sendTextQuery, query);
}
