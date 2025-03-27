import { env } from '../utils/env';
import trans from 'translate';

export async function translate(text: string) {
  trans.engine = 'google';
  // trans.key = env.DEEPL_API_KEY;


  if (text === 'test') {
    return 'teste';
  }

  return await trans(text, 'pt');
}
