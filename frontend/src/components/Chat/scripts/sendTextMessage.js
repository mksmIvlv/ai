import { getAsync } from '../../../services/rest/getAsync';
import geminiUrlEnums from '../../../enums/gemini/geminiUrlEnums';

export async function sendTextMessage(message) {
    const query =
        {
            textQuery : message
        }
    return await getAsync(geminiUrlEnums.sendTextQuery, query);
}
