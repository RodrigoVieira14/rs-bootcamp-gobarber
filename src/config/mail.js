export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '22c4ce3fb93e34',
    pass: 'df890b52754fca',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

// Rocketseat usa o Amazon SES para envio de emails
/* outros serviços de envio de email
 * mailgun
 * sparkpost
 * mandril (mailchimp)
 * - AMBIENTE DE DESENVOLVIMENTO
 *  mailtrap.io
 */
