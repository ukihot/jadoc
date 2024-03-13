---
title: Raid
description: A reference page in my new Jad docs site.
---

Adhering to the rules of the competition.

## Summary

- コアシーン
- レイドとアンティ両方のドメイン知識が参照される
- 11x7 Meters divided into two equal halves by a mid line

## Test Specification

| describe       | it                                         | assert               |
| -------------- | ------------------------------------------ | -------------------- |
| ストラグル判定 | チームが同じプレイヤーが接触               | Struggle === False   |
| ストラグル判定 | チームが異なるプレイヤーが接触             | Struggle === True    |
| セーフ判定     | 30s 以内に帰還しない                       | raiderSafe === False |
| セーフ判定     | アウトサイドラインを越境                   | raiderSafe === False |
| セーフ判定     | エンドラインを越境                         | raiderSafe === False |
| セーフ判定     | キャントが途切れた                         | raiderSafe === False |
| セーフ判定     | エンプティレイドを３回繰り返した           | raiderSafe === False |
| セーフ判定     | 何れのアウト条件に合致していない状態で帰陣 | raiderSafe === True  |
