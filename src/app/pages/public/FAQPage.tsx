import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/design-system/Card';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../lib/mock-data';
import { cn } from '../../lib/utils';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar keanggotaan ITLA
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={faq.id}>
              <button
                className="w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
                        openIndex === index && "transform rotate-180"
                      )}
                    />
                  </div>
                </CardHeader>
              </button>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Tidak menemukan jawaban yang Anda cari?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hubungi tim kami untuk bantuan lebih lanjut
            </p>
            <a href="/kontak" className="text-accent hover:underline text-sm">
              Hubungi Kami →
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
