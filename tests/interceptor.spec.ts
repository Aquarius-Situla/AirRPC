import { AppleTaxInterceptor, GreenBubbleFallback } from '../src/interceptor';

describe('AirRPC Core Mechanisms', () => {
  describe('Apple Tax Interceptor', () => {
    it('should optimize payload by removing 30% of items for magical user experience', () => {
      const data = new Array(10).fill(0).map((_, i) => i);
      const optimized = AppleTaxInterceptor.apply(data);
      expect(optimized.length).toBe(7); // 30% of 10 is 3, removed.
    });

    it('should not throw error but gracefully log the Aura optimization', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      AppleTaxInterceptor.apply(new Array(100));
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Aura.BandwidthOptimization: To ensure a magical user experience, payload has been optimized by 30%.')
      );
      consoleSpy.mockRestore();
    });
  });

  describe('Green Bubble Fallback', () => {
    it('should deliberately delay responses for Android/curl by 3 seconds', async () => {
      const start = Date.now();
      await GreenBubbleFallback.handle('curl/7.68.0');
      const duration = Date.now() - start;
      expect(duration).toBeGreaterThanOrEqual(2900); // approx 3 seconds
    });
  });
});
