export default interface User {
  _id: string;
  ativo: boolean;
  blocked: boolean;
  confirmed: boolean;
  email: string;
  file: any;
  fotosChamado: any[];
  id: string;
  permissoes: any[];
  provider: "local";
  role: any[];
  unidades: any[];
  username: string;
}