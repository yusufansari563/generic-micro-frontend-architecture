import ErrorBoundary from "./lib/@components/ErrorBoundary";
import StarWarsCharactersContainer from "./lib/@components/pattern/component-composition/StarWarsCharactersContainer";
import CharacterList from "./lib/@components/pattern/presentation-container/CharacterList";
import { store } from './lib/@hooks/index';

export {
  ErrorBoundary,
  store,
  CharacterList,
  StarWarsCharactersContainer
}