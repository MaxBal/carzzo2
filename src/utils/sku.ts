export function generateSKU({
  design,
  size,
  material,
  brand,
  fixation
}: {
  design: string;
  size: string;
  material?: string;
  brand?: string;
  fixation?: string;
}) {
  return [design, size, material ? "лого." + material : "без-лого", brand || "", fixation || "без-фіксації"]
    .filter(Boolean)
    .join("-");
}

export function calculatePrice({
  basePrice,
  size,
  fixation,
  material
}: {
  basePrice: number;
  size: string;
  fixation?: string;
  material?: string;
}) {
  let price = basePrice;

  const sizeDelta: Record<string, number> = {
    S: -100,
    M: 0,
    L: 200,
    XL: 400
  };

  price += sizeDelta[size] || 0;

  if (fixation === "на дні" || fixation === "на стінці") {
    price += 100;
  } else if (fixation === "дно+стінка") {
    price += 200;
  }

  if (material === "латунь" || material === "нержавіюча сталь") {
    price += 150;
  }

  return price;
}
