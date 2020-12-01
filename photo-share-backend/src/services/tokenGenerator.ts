import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class TokenGenerator {
  private static expiresIn: string = "1200min";

  public generate = (input: AuthenticationData): string => {
    const newToken = jwt.sign(
      {
        id: input.id
        
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: TokenGenerator.expiresIn,
      }
    );
    return newToken;
  };

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id
      
    };
    return result;
  }


  public verify(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = { id: payload.id };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
  
}

export default new TokenGenerator()