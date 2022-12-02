export const renderIfTrue = (
  condition: boolean,
  Component: React.ReactNode
) => {
  return condition ? Component : null;
};

export const renderIfFalse = (
  condition: boolean,
  Component: React.ReactNode
) => {
  return condition ? null : Component;
};
