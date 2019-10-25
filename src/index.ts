import { PhoneBookApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { PhoneBookApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new PhoneBookApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}`);

  return app;
}
