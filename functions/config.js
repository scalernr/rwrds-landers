export async function onRequest(context) {
    const { pathname } = new URL(context.request.url);
  
    // US Blank (Universal Template)
    if (pathname.includes('/lp1/appv2/tt/fluent/us/blank/')) {
      return Response.json({
        logoPath: "/public/assets/prewardslogo3.png",
        headline: "Earn Rewards Using Your Phone",
        ctaText: "Get Started",
        brandColor: "#FAC804",
        affiliateLink: "https://affrkr.com/?s1=",
        useExitTracking: false
      });
    }