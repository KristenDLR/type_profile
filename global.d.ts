declare module "*.png" {
  const value: any;

  export = value;
}

declare module "*.pdf" {
  const value: string;
  export default value;
}
