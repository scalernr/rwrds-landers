export async function onRequest(context) {
  const { request } = context;
  const { pathname } = new URL(request.url);
  const referer = request.headers.get('referer') || "";

  console.log("referer:", referer);

  if (referer.includes('/rl/lp1/appv2/tt/fluent/us/blank/')) {
    return Response.json({
      logoPath: "/public/assets/prewardslogo3.png",
      headline: "Earn Rewards Using Your Phone",
      ctaText: "Get Started",
      brandColor: "#FAC804",
      affiliateLink: "https://affrkr.com/?s1=",
      useExitTracking: false
    });
  }
  if (referer.includes('/rl/lp1/appv2/tt/fluent/us/playful-ios/')) {
    return Response.json({
      logoPath: "/public/assets/prewardslogo3.png",
      headline: "Test apps and get paid!",
      ctaText: "Download Here",
      brandColor: "#b6b1ef", // Playful purple
      affiliateLink: "https://affrkr.com/?yte=h41EnWbqKhajken6sj5ZWUUYIr110aduvQJDRoz7h5U%3d&s1=",
      useExitTracking: false,
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
