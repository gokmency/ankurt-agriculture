export interface Inquiry { name: string; phone: string; location: string; message: string; consent: boolean }
export function validateInquiry(values: Inquiry): Partial<Record<'name' | 'phone' | 'privacyConsent', string>> {
  const errors: Partial<Record<'name' | 'phone' | 'privacyConsent', string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Lütfen adınızı yazın.';
  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) errors.phone = 'Lütfen alan koduyla birlikte geçerli bir telefon numarası yazın.';
  if (!values.consent) errors.privacyConsent = 'Devam etmek için iletişim bilgilerinizin kullanımını kabul edin.';
  return errors;
}
export function buildInquiryMessage(values: Inquiry, product: string): string {
  return ['Merhaba ANKURT, web siteniz üzerinden yazıyorum.', '', `Ad Soyad: ${values.name.trim()}`,
    `Telefon: ${values.phone.trim()}`, `Konum: ${values.location.trim() || 'Belirtilmedi'}`,
    `İlgilendiğim Makine: ${product}`, `Not / Sorularım: ${values.message.trim() || 'Yok'}`].join('\n');
}
