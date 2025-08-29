import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import dnaVideo from '@/assets/hero1.mp4';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden">
        <section>
          <div className="relative flex min-h-screen items-center justify-center px-6 lg:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
              {/* Heading Animation */}
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mt-8 text-6xl font-semibold md:text-6xl xl:text-6xl xl:[line-height:1.125]"
              >
                Craft <span className="text-yellow-400">Beautiful</span> <br /> Invitations in
                Minutes
              </motion.h4>

              {/* Paragraph Animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block"
              >
                Celebrate life’s special moments with stunning, customizable video invitations for
                weddings, birthdays, and more — all in just a few clicks.
              </motion.p>

              {/* Button Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                className="mt-8"
              >
                <Button
                  size="sm"
                  className="h-12 rounded-full cursor-pointer pr-3 text-base"
                  onClick={() => navigate('/template-selection')}
                  effect="expandIcon"
                  icon={ArrowRightIcon}
                  iconPlacement="right"
                >
                  <span className="text-nowrap">Let's Start</span>
                </Button>
              </motion.div>
            </div>

            {/* Background video */}
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:rounded-[3rem] dark:border-white/5 shadow-xl shadow-black/20">
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-35 dark:opacity-60 rounded-3xl lg:rounded-[3rem]"
                src={dnaVideo}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-3xl lg:rounded-[3rem] bg-gradient-to-b from-black/25 via-black/10 to-black/25 dark:from-black/40 dark:via-transparent dark:to-black/40 pointer-events-none" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
