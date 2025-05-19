export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);

  console.log("pathname:", pathname); // ADD THIS LINE

  if (pathname.includes('/rl/lp1/appv2/tt/fluent/us/blank/')) {
    return Response.json({
      logoPath: "/public/assets/prewardslogo3.png",
      headline: "Earn Rewards Using Your Phone",
      ctaText: "Get Started",
      brandColor: "#FAC804",
      affiliateLink: "https://affrkr.com/?s1=",
      useExitTracking: false
    });
  }

  return Response.json({
    logoPath: "/public/assets/default.png",
    headline: "Claim Your Reward",
    ctaText: "Continue",
    brandColor: "#222",
    affiliateLink: "https://example.com/?s1=",
    useExitTracking: false
  });
}
