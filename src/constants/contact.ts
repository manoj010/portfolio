const emailAddress = 'manoj.ale2002@gmail.com';

export const mailtoUrl = `mailto:${emailAddress}`;

export const openEmailClient = () => {
  window.location.href = mailtoUrl;
};
