/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Trophy, MapPin, DollarSign, Clock, Heart, TrendingUp } from 'lucide-react';

const BENEFITS = [
  {
    icon: Trophy,
    title: 'Superior Quality',
    desc: 'We deliver high-quality builds with attention to every detail, ensuring lasting value and comfort for our clients.',
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    desc: 'Our properties are situated in prime areas across Bangladesh, including premium sectors of Jolshiri Abashon and key Dhaka districts.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    desc: 'We offer excellent value with transparent pricing and flexible payment options to make your dream property accessible.',
  },
  {
    icon: Clock,
    title: 'Decades of Experience',
    desc: 'Backed by three generations of property development expertise, we understand the Bangladesh real estate market inside and out.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    desc: 'Our dedicated team supports you through every step of your property journey, from initial inquiry to after-sales care.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Opportunities',
    desc: 'We provide comprehensive property management services to help you maximize returns on your real estate investments.',
  },
];

export default function AboutBenefitsGrid() {
  return (
    <section className="w-full py-20 bg-surface-muted/50 border-b border-border-light">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col gap-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-3xl font-extrabold text-text-main tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-normal">
            Our commitment to excellence drives everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 15px 35px rgba(0,0,0,0.04)" }}
                className="bg-surface-alt rounded-2xl border border-border-main p-6 flex flex-col text-left justify-start gap-4 transition-all duration-300 dark:card-hover-glow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#b84822]/10 flex items-center justify-center text-[#b84822] shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-text-main tracking-tight">{b.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
