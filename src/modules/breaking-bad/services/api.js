const breakingAPI =
  'https://breakingbadapi.com/api/characters';

const getBreakingBadApi = async () => {
  try {
    const res = await fetch(breakingAPI);

    const characters = res.json();

    return characters;
  } catch (error) {}
};

export { getBreakingBadApi };
