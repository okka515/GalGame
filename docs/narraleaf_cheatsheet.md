# NarraLeaf-React メモ (API チートシート)

ソースコードや型定義から判明した、`narraleaf-react` コア機能の実装方法についてのメモです。
今後の開発において、何度もソースを読み直さなくて済むようにまとめています。

## Menu の条件付き選択肢

`Menu.prompt().choose()` だけでなく、表示や選択の可否を動的に切り替えるメソッドが用意されています。

* `showWhen(condition: Lambda | LambdaHandler<boolean>, prompt: Sentence | string, action: ActionStatements)`
  * `condition` が `true` の場合のみ、選択肢を表示します。
  * `choose` の代わりに使います。
* `hideIf(condition: Lambda | LambdaHandler<boolean>, prompt: Sentence | string, action: ActionStatements)`
  * `condition` が `true` の場合、選択肢を非表示にします。
* `enableWhen(condition: Lambda | LambdaHandler<boolean>, prompt: Sentence | string, action: ActionStatements)`
  * `condition` が `true` の場合のみ、選択肢が有効化（クリック可能）されます。`false` の場合は表示されたまま無効（グレーアウト等）になります。
* `disableIf(condition: Lambda | LambdaHandler<boolean>, prompt: Sentence | string, action: ActionStatements)`
  * `condition` が `true` の場合、選択肢が無効化されます。

## Persistent (状態管理) と Condition (条件分岐)

ゲームの状態を管理する `Persistent` は、NarraLeaf-Reactの各種アクション(表示や分岐)に対して `Lambda` を返す各種メソッドを提供しています。これらを Menu の条件などにそのまま渡すことができます。

* パラメータの確認 (Lambda を返す)
  * `Persistent.isTrue(key)`: 対象のフラグ(boolean)が `true` かどうか判定
  * `Persistent.isFalse(key)`: 対象のフラグ(boolean)が `false` かどうか判定
  * `Persistent.equals(key, value)`: 対象の `key` の値が `value` と等しいか判定
  * `Persistent.notEquals(key, value)`: 等しくないか判定

### Condition.If によるシナリオ分岐

ゲームフラグなどの `Lambda` に応じてアクションを分岐させる場合は、`Condition.If` を使用します。

```typescript
Condition.If(gameFlags.isTrue("is_cleared"), [
    Scene.jumpTo(clearScene)
]).ElseIf(gameFlags.isFalse("is_cleared"), [
    Scene.jumpTo(normalScene)
])
```

## Control (制御ループ)

繰り返し処理や制御を行う場合、`Control` アクションが用意されています。(実装箇所周辺から推測)

* `Control.whileLoop(condition: Lambda, actions: ActionStatements)`
  * `condition` が `true` の間、`actions` を繰り返します。
  * `Control.break()` で抜け出すことも可能と見られます。
