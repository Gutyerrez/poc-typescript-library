export class Env {
  static getString = (key: string): string => {
    return `${key}='localhost'`;
  }
}
