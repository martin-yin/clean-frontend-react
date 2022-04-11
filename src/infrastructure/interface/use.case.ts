export abstract class UseCase<S, T> {
  abstract execute(params: S): Promise<T>
}
