declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        REACT_APP_SERVICE_ID: string;
        REACT_APP_TEMPLATE_ID: string;
        REACT_APP_USER_ID: string;
      }
    }
  }
  
  export {}
  