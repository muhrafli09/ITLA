import React from 'react';
import { Card, CardContent } from '../../components/design-system/Card';
import { faqs } from '../../lib/mock-data';
import { FadeIn } from '../../components/ui/FadeIn';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@/components/animate-ui/components/headless/accordion';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-secondary py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum seputar keanggotaan ITLA
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <Accordion className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} className="bg-card rounded-lg border shadow-sm">
                <AccordionButton className="w-full px-6 py-4 text-left font-semibold hover:bg-accent/5 transition-colors">
                  {faq.question}
                </AccordionButton>
                <AccordionPanel className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={200}>
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
        </FadeIn>
      </div>
    </div>
  );
}
