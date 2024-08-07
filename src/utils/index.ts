import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

/**
 * Encripta la contraseña.
 * @param contraseña
 * @returns
 */
export const EncryptPassword = async (contraseña: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contraseña, salt);
};

/**
 * Compara dos contraseñas.
 * @param contraseña
 * @param contraseñaRecibida
 * @returns
 */
export const ComparePassword = async (
  contraseña: string,
  contraseñaRecibida: string
): Promise<boolean> => {
  return await bcrypt.compare(contraseña, contraseñaRecibida);
};

/**
 * Crea un código random.
 * @returns
 */
export const CodeRandom = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCode = "";
  for (let i = 0; i < 8; i++) {
    randomCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomCode.toUpperCase();
};
